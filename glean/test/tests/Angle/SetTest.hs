{-
  Copyright (c) Meta Platforms, Inc. and affiliates.
  All rights reserved.

  This source code is licensed under the BSD-style license found in the
  LICENSE file in the root directory of this source tree.
-}

{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE LambdaCase #-}
module Angle.SetTest (main) where

import Control.Monad.Trans.Except
import Data.Function
import Data.Text

import Glean.Angle.Parser
import Glean.Angle.Types
import Glean.Init
import Glean.Query.Typecheck
import Glean.Query.Flatten
import Glean.Schema.Resolve
import Glean.Database.Schema.Types

import qualified Data.HashMap.Strict as HashMap

import Test.HUnit
import TestRunner
import Util.String.Quasi
import Glean.Database.Types

main :: IO ()
main = withUnitTest $ testRunner $ TestList
  [ TestLabel "set" setTest
  ]

-- First version to support sets
v :: AngleVersion
v = AngleVersion 8

setTest :: Test
setTest = TestList
    [ TestLabel "schema parses" $ TestCase $
        case parseSchemaWithVersion v
            [s|
            schema foo {
            type Foo = set maybe nat
            }
            |]
        of
            Left err ->
              assertFailure $ "Parsing schema failed with error:\n" <> err
            Right _ -> return ()
    , TestLabel "query parses" $ TestCase $
        case parseQueryWithVersion  v
            [s| set(1,set(X,all(Y)))
            |]
        of
            Left err ->
              assertFailure $ "Parsing query failed with error:\n" <> err
            Right _ -> return ()
    , TestLabel "query type checks" $ TestCase $
        case parseQueryWithVersion v
            [s| 1 = all(set(1)) ; 1
            |]
        of
            Left err ->
                assertFailure $ "Parsing query failed with error:\n" <> err
            Right parsed -> do
                let scope = addTmpPredicate HashMap.empty
                resolved <- runExcept $
                  runResolve v scope (resolveQuery parsed)
                runExcept $ typecheck undefined v undefined resolved
              & \case
                Left err ->
                    assertFailure $
                      "Resolving and typechecking query failed with error:\n"
                      <> unpack err
                Right _ -> return ()
    , TestLabel "query flattens" $ TestCase $
        case parseQueryWithVersion v
            [s| 1 = all(set(1)) ; 1
            |]
        of
            Left err ->
                assertFailure $ "Parsing query failed with error:\n" <> err
            Right parsed -> do
                let scope = addTmpPredicate HashMap.empty
                resolved <- runExcept $
                  runResolve v scope (resolveQuery parsed)
                typechecked <- runExcept $
                  typecheck undefined v undefined resolved
                runExcept $
                  flatten DisableRecursion undefined v  False typechecked
              & \case
                Left err ->
                    assertFailure $
                      "Resolving, typechecking and "
                      <> "flatting query failed with error:\n"
                      <> unpack err
                Right _ -> return ()
    ]
