/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

include "glean/config/server/server_config.thrift"
include "glean/if/glean.thrift"

namespace cpp2 facebook.glean.thrift.internal
namespace hs Glean

// The Schema stored in a DB
struct StoredSchema {
  1: string (hs.type = "ByteString") schema;
  2: map<glean.Id, glean.PredicateRef> predicateIds;
  3: map<string, glean.Version> versions;
}

// -----------------------------------------------------------------------------
// DB metadata

union DatabaseIncomplete {
  1: glean.Tasks tasks;
}

struct DatabaseFinalizing {}

// The status of data being written into a DB
union Completeness {
  1: DatabaseIncomplete incomplete;
  3: glean.DatabaseComplete complete;
  4: glean.DatabaseBroken broken;
  5: DatabaseFinalizing finalizing;
} (hs.prefix = "", hs.nonempty)

// Information about a database stored by Glean.
struct Meta {
  // Database version
  1: server_config.DBVersion metaVersion;

  // When was the database created
  2: glean.PosixEpochTime metaCreated;

  // Completeness status
  3: Completeness metaCompleteness;

  // Backup status
  4: optional string metaBackup;

  // Arbitrary metadata about this DB. Properties prefixed by
  // "glean."  are reserved for use by Glean itself.
  5: glean.DatabaseProperties metaProperties;

  // What this DB depends on.
  6: optional glean.Dependencies metaDependencies;

  // Whether all facts for a predicate have already been inserted.
  7: list<glean.PredicateRef> metaCompletePredicates;

  // Temporary: indicates that all non-derived predicates are complete.
  // Later we will allow non-derived predicates to be completed separately
  // and store that information in metaCompletePredicates.
  8: bool metaAxiomComplete;

  // If present, this is the time when the source data was read.
  // This should always be earlier than created time.
  9: optional glean.PosixEpochTime metaRepoHashTime;
} (hs.prefix = "")

// ---------------------------------------------------------------------------
// Schema index

struct SchemaInstance {
  // The SchemaId corresponding to each all.N schema. We could
  // recompute this from the schema, but storing it here is better:
  //  - we can change the hashing strategy and the server will still work
  //    with the existing schemas
  //  - if we want to deploy a fix to a schema without changing its hash,
  //    we can do that
  //
  // The keys are morally SchemaId, but when I used SchemaId as the key
  // there were spurious quotes surrounding the string produced by the
  // JSON serializer - not sure if this was a bug in the Haskell JSON Thrift
  // serializer or if it's the "correct" behaviour.
  1: map<string, glean.Version> versions;

  // Points to the file containing the schema source
  3: string file;
}

struct SchemaIndex {
  // The current schema
  1: SchemaInstance current;

  // Older versions of the schema we also know about
  2: list<SchemaInstance> older;
}
