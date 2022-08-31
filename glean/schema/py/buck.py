# @generated
# To regenerate this file run fbcode//glean/schema/gen/sync
from typing import Optional, Tuple, Union, List, Dict
from thrift.py3 import Struct
import ast
from glean.schema.py.glean_schema_predicate import GleanSchemaPredicate, angle_for, R
from glean.schema.py.src import *
from glean.schema.py.sys import *


from glean.schema.buck.types import (
    TargetHash,
    TargetSourcesBaseModule,
    LocatorReverseDeps,
    Type,
    TargetDependencies,
    Locator,
    TargetSources,
    Platform,
    TargetAttribute,
    FileEntity,
    OutTarget,
    Label,
    TargetOuts,
    OutsTarget,
    LocatorWithLabel,
    TargetSources,
    AttributeValue,
    Labels,
    SourceFileLocation,
    OutputLabel,
    TargetUses,
    Owner,
    Target,
    DefinitionLocation,
    TargetIndexer,
    FileDefinition,
    Target,
    AttributeName,
    Owner,
    RuleKey,
    TargetLinkWhole,
    Definition,
    TargetOut,
    FileXRefs,
    TargetLocation,
    DestinationUses,
    TranslationUnit,
    File,
    FileTarget,
    TranslationUnit,
    TargetIndexerName,
    FileResolved,
    Consumer,
    File,
)


class BuckTargetHash(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], locator: ast.Expr, targetHash: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TargetHash.1 {{ locator = {angle_for(__env, locator)}, targetHash = {angle_for(__env, targetHash)} }}", TargetHash

  @staticmethod
  def angle_query(*, locator: Optional["BuckLocator"] = None, targetHash: Optional[str] = None) -> "BuckTargetHash":
    raise Exception("this function can only be called from @angle_query")

class BuckTargetSourcesBaseModule(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], locator: ast.Expr, srcs: ast.Expr, baseModule: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TargetSourcesBaseModule.3 {{ locator = {angle_for(__env, locator)}, srcs = {angle_for(__env, srcs)}, baseModule = {angle_for(__env, baseModule)} }}", TargetSourcesBaseModule

  @staticmethod
  def angle_query(*, locator: Optional["BuckTarget"] = None, srcs: Optional[Tuple[()]] = None, baseModule: Optional[Tuple[()]] = None) -> "BuckTargetSourcesBaseModule":
    raise Exception("this function can only be called from @angle_query")

class BuckLocatorReverseDeps(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], locator: ast.Expr, rdeps: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.LocatorReverseDeps.1 {{ locator = {angle_for(__env, locator)}, rdeps = {angle_for(__env, rdeps)} }}", LocatorReverseDeps

  @staticmethod
  def angle_query(*, locator: Optional["BuckLocator"] = None, rdeps: Optional[Tuple[()]] = None) -> "BuckLocatorReverseDeps":
    raise Exception("this function can only be called from @angle_query")

class BuckType(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.Type.1 {angle_for(__env, arg)}", Type

  @staticmethod
  def angle_query(*, arg: Optional[str] = None) -> "BuckType":
    raise Exception("this function can only be called from @angle_query")

class BuckTargetDependencies(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], target: ast.Expr, dependencies: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TargetDependencies.1 {{ target = {angle_for(__env, target)}, dependencies = {angle_for(__env, dependencies)} }}", TargetDependencies

  @staticmethod
  def angle_query(*, target: Optional["BuckTarget"] = None, dependencies: Optional[Tuple[()]] = None) -> "BuckTargetDependencies":
    raise Exception("this function can only be called from @angle_query")

class BuckLocator(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], subdir: ast.Expr, path: ast.Expr, name: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.Locator.1 {{ subdir = {angle_for(__env, subdir)}, path = {angle_for(__env, path)}, name = {angle_for(__env, name)} }}", Locator

  @staticmethod
  def angle_query(*, subdir: Optional[Tuple[()]] = None, path: Optional[str] = None, name: Optional[str] = None) -> "BuckLocator":
    raise Exception("this function can only be called from @angle_query")

class BuckTargetSources(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], target: ast.Expr, headers: ast.Expr, exportedHeaders: ast.Expr, srcs: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TargetSources.1 {{ target = {angle_for(__env, target)}, headers = {angle_for(__env, headers)}, exportedHeaders = {angle_for(__env, exportedHeaders)}, srcs = {angle_for(__env, srcs)} }}", TargetSources

  @staticmethod
  def angle_query(*, target: Optional["BuckTarget"] = None, headers: Optional[Tuple[()]] = None, exportedHeaders: Optional[Tuple[()]] = None, srcs: Optional[Tuple[()]] = None) -> "BuckTargetSources":
    raise Exception("this function can only be called from @angle_query")

class BuckPlatform(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.Platform.1 {angle_for(__env, arg)}", Platform

  @staticmethod
  def angle_query(*, arg: Optional[str] = None) -> "BuckPlatform":
    raise Exception("this function can only be called from @angle_query")

class BuckTargetAttribute(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], target: ast.Expr, attribute: ast.Expr, value: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TargetAttribute.3 {{ target = {angle_for(__env, target)}, attribute = {angle_for(__env, attribute)}, value = {angle_for(__env, value)} }}", TargetAttribute

  @staticmethod
  def angle_query(*, target: Optional["BuckTarget"] = None, attribute: Optional["BuckAttributeName"] = None, value: Optional["BuckAttributeValue"] = None) -> "BuckTargetAttribute":
    raise Exception("this function can only be called from @angle_query")

class BuckFileEntity(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, entity: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.FileEntity.3 {{ file = {angle_for(__env, file)}, entity = {angle_for(__env, entity)} }}", FileEntity

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, entity: Optional[Tuple[()]] = None) -> "BuckFileEntity":
    raise Exception("this function can only be called from @angle_query")

class BuckOutTarget(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, target: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.OutTarget.1 {{ file = {angle_for(__env, file)}, target = {angle_for(__env, target)} }}", OutTarget

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, target: Optional["BuckTarget"] = None) -> "BuckOutTarget":
    raise Exception("this function can only be called from @angle_query")

class BuckLabel(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.Label.1 {angle_for(__env, arg)}", Label

  @staticmethod
  def angle_query(*, arg: Optional[str] = None) -> "BuckLabel":
    raise Exception("this function can only be called from @angle_query")

class BuckTargetOuts(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], target: ast.Expr, outputLabel: ast.Expr, file: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TargetOuts.3 {{ target = {angle_for(__env, target)}, outputLabel = {angle_for(__env, outputLabel)}, file = {angle_for(__env, file)} }}", TargetOuts

  @staticmethod
  def angle_query(*, target: Optional["BuckTarget"] = None, outputLabel: Optional[Tuple[()]] = None, file: Optional["SrcFile"] = None) -> "BuckTargetOuts":
    raise Exception("this function can only be called from @angle_query")

class BuckOutsTarget(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, target: ast.Expr, outputLabel: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.OutsTarget.3 {{ file = {angle_for(__env, file)}, target = {angle_for(__env, target)}, outputLabel = {angle_for(__env, outputLabel)} }}", OutsTarget

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, target: Optional["BuckTarget"] = None, outputLabel: Optional[Tuple[()]] = None) -> "BuckOutsTarget":
    raise Exception("this function can only be called from @angle_query")

class BuckLocatorWithLabel(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], locator: ast.Expr, label: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.LocatorWithLabel.3 {{ locator = {angle_for(__env, locator)}, label = {angle_for(__env, label)} }}", LocatorWithLabel

  @staticmethod
  def angle_query(*, locator: Optional["BuckLocator"] = None, label: Optional["BuckOutputLabel"] = None) -> "BuckLocatorWithLabel":
    raise Exception("this function can only be called from @angle_query")

class BuckTargetSources(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], target: ast.Expr, headers: ast.Expr, exportedHeaders: ast.Expr, srcs: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TargetSources.3 {{ target = {angle_for(__env, target)}, headers = {angle_for(__env, headers)}, exportedHeaders = {angle_for(__env, exportedHeaders)}, srcs = {angle_for(__env, srcs)} }}", TargetSources

  @staticmethod
  def angle_query(*, target: Optional["BuckTarget"] = None, headers: Optional[Tuple[()]] = None, exportedHeaders: Optional[Tuple[()]] = None, srcs: Optional[Tuple[()]] = None) -> "BuckTargetSources":
    raise Exception("this function can only be called from @angle_query")

class BuckAttributeValue(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.AttributeValue.3 {angle_for(__env, arg)}", AttributeValue

  @staticmethod
  def angle_query(*, arg: Optional[Tuple[()]] = None) -> "BuckAttributeValue":
    raise Exception("this function can only be called from @angle_query")

class BuckLabels(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.Labels.1 {angle_for(__env, arg)}", Labels

  @staticmethod
  def angle_query(*, arg: Optional[Tuple[()]] = None) -> "BuckLabels":
    raise Exception("this function can only be called from @angle_query")

class BuckSourceFileLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, span: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.SourceFileLocation.3 {{ file = {angle_for(__env, file)}, span = {angle_for(__env, span)} }}", SourceFileLocation

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, span: Optional[Tuple[()]] = None) -> "BuckSourceFileLocation":
    raise Exception("this function can only be called from @angle_query")

class BuckOutputLabel(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.OutputLabel.3 {angle_for(__env, arg)}", OutputLabel

  @staticmethod
  def angle_query(*, arg: Optional[str] = None) -> "BuckOutputLabel":
    raise Exception("this function can only be called from @angle_query")

class BuckTargetUses(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], locator: ast.Expr, file: ast.Expr, spans: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TargetUses.3 {{ locator = {angle_for(__env, locator)}, file = {angle_for(__env, file)}, spans = {angle_for(__env, spans)} }}", TargetUses

  @staticmethod
  def angle_query(*, locator: Optional["BuckLocator"] = None, file: Optional["SrcFile"] = None, spans: Optional[Tuple[()]] = None) -> "BuckTargetUses":
    raise Exception("this function can only be called from @angle_query")

class BuckOwner(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], source: ast.Expr, owner: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.Owner.3 {{ source = {angle_for(__env, source)}, owner = {angle_for(__env, owner)} }}", Owner

  @staticmethod
  def angle_query(*, source: Optional["SrcFile"] = None, owner: Optional["BuckTargetSources"] = None) -> "BuckOwner":
    raise Exception("this function can only be called from @angle_query")

class BuckTarget(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], locator: ast.Expr, type_: ast.Expr, defaultPlatform: ast.Expr, labels: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.Target.2 {{ locator = {angle_for(__env, locator)}, type_ = {angle_for(__env, type_)}, defaultPlatform = {angle_for(__env, defaultPlatform)}, labels = {angle_for(__env, labels)} }}", Target

  @staticmethod
  def angle_query(*, locator: Optional["BuckLocator"] = None, type_: Optional["BuckType"] = None, defaultPlatform: Optional[Tuple[()]] = None, labels: Optional["BuckLabels"] = None) -> "BuckTarget":
    raise Exception("this function can only be called from @angle_query")

class BuckDefinitionLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], definition: ast.Expr, file: ast.Expr, span: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.DefinitionLocation.3 {{ definition = {angle_for(__env, definition)}, file = {angle_for(__env, file)}, span = {angle_for(__env, span)} }}", DefinitionLocation

  @staticmethod
  def angle_query(*, definition: Optional["BuckDefinition"] = None, file: Optional["SrcFile"] = None, span: Optional[Tuple[()]] = None) -> "BuckDefinitionLocation":
    raise Exception("this function can only be called from @angle_query")

class BuckTargetIndexer(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], name: ast.Expr, target: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TargetIndexer.3 {{ name = {angle_for(__env, name)}, target = {angle_for(__env, target)} }}", TargetIndexer

  @staticmethod
  def angle_query(*, name: Optional["BuckTargetIndexerName"] = None, target: Optional["BuckTarget"] = None) -> "BuckTargetIndexer":
    raise Exception("this function can only be called from @angle_query")

class BuckFileDefinition(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, definition: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.FileDefinition.3 {{ file = {angle_for(__env, file)}, definition = {angle_for(__env, definition)} }}", FileDefinition

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, definition: Optional["BuckDefinition"] = None) -> "BuckFileDefinition":
    raise Exception("this function can only be called from @angle_query")

class BuckTarget(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], repo: ast.Expr, name: ast.Expr, platform: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.Target.1 {{ repo = {angle_for(__env, repo)}, name = {angle_for(__env, name)}, platform = {angle_for(__env, platform)} }}", Target

  @staticmethod
  def angle_query(*, repo: Optional["SysBlob"] = None, name: Optional["SysBlob"] = None, platform: Optional[Tuple[()]] = None) -> "BuckTarget":
    raise Exception("this function can only be called from @angle_query")

class BuckAttributeName(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.AttributeName.3 {angle_for(__env, arg)}", AttributeName

  @staticmethod
  def angle_query(*, arg: Optional[str] = None) -> "BuckAttributeName":
    raise Exception("this function can only be called from @angle_query")

class BuckOwner(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], source: ast.Expr, owner: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.Owner.1 {{ source = {angle_for(__env, source)}, owner = {angle_for(__env, owner)} }}", Owner

  @staticmethod
  def angle_query(*, source: Optional["SrcFile"] = None, owner: Optional["BuckTargetSources_1"] = None) -> "BuckOwner":
    raise Exception("this function can only be called from @angle_query")

class BuckRuleKey(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], locator: ast.Expr, ruleKey: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.RuleKey.1 {{ locator = {angle_for(__env, locator)}, ruleKey = {angle_for(__env, ruleKey)} }}", RuleKey

  @staticmethod
  def angle_query(*, locator: Optional["BuckLocator"] = None, ruleKey: Optional[str] = None) -> "BuckRuleKey":
    raise Exception("this function can only be called from @angle_query")

class BuckTargetLinkWhole(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TargetLinkWhole.1 {angle_for(__env, arg)}", TargetLinkWhole

  @staticmethod
  def angle_query(*, arg: Optional["BuckTarget"] = None) -> "BuckTargetLinkWhole":
    raise Exception("this function can only be called from @angle_query")

class BuckDefinition(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], module: ast.Expr, name: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.Definition.3 {{ module = {angle_for(__env, module)}, name = {angle_for(__env, name)} }}", Definition

  @staticmethod
  def angle_query(*, module: Optional["SrcFile"] = None, name: Optional[str] = None) -> "BuckDefinition":
    raise Exception("this function can only be called from @angle_query")

class BuckTargetOut(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], target: ast.Expr, file: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TargetOut.1 {{ target = {angle_for(__env, target)}, file = {angle_for(__env, file)} }}", TargetOut

  @staticmethod
  def angle_query(*, target: Optional["BuckTarget"] = None, file: Optional["SrcFile"] = None) -> "BuckTargetOut":
    raise Exception("this function can only be called from @angle_query")

class BuckFileXRefs(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, xrefs: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.FileXRefs.3 {{ file = {angle_for(__env, file)}, xrefs = {angle_for(__env, xrefs)} }}", FileXRefs

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, xrefs: Optional[Tuple[()]] = None) -> "BuckFileXRefs":
    raise Exception("this function can only be called from @angle_query")

class BuckTargetLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], locator: ast.Expr, file: ast.Expr, span: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TargetLocation.3 {{ locator = {angle_for(__env, locator)}, file = {angle_for(__env, file)}, span = {angle_for(__env, span)} }}", TargetLocation

  @staticmethod
  def angle_query(*, locator: Optional["BuckLocator"] = None, file: Optional["SrcFile"] = None, span: Optional[Tuple[()]] = None) -> "BuckTargetLocation":
    raise Exception("this function can only be called from @angle_query")

class BuckDestinationUses(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], destination: ast.Expr, file: ast.Expr, spans: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.DestinationUses.3 {{ destination = {angle_for(__env, destination)}, file = {angle_for(__env, file)}, spans = {angle_for(__env, spans)} }}", DestinationUses

  @staticmethod
  def angle_query(*, destination: Optional[Tuple[()]] = None, file: Optional["SrcFile"] = None, spans: Optional[Tuple[()]] = None) -> "BuckDestinationUses":
    raise Exception("this function can only be called from @angle_query")

class BuckTranslationUnit(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, target: ast.Expr, platform: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TranslationUnit.2 {{ file = {angle_for(__env, file)}, target = {angle_for(__env, target)}, platform = {angle_for(__env, platform)} }}", TranslationUnit

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, target: Optional["BuckLocator"] = None, platform: Optional[Tuple[()]] = None) -> "BuckTranslationUnit":
    raise Exception("this function can only be called from @angle_query")

class BuckFile(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.File.1 {angle_for(__env, arg)}", File

  @staticmethod
  def angle_query(*, arg: Optional[Tuple[()]] = None) -> "BuckFile":
    raise Exception("this function can only be called from @angle_query")

class BuckFileTarget(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, locator: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.FileTarget.3 {{ file = {angle_for(__env, file)}, locator = {angle_for(__env, locator)} }}", FileTarget

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, locator: Optional["BuckLocator"] = None) -> "BuckFileTarget":
    raise Exception("this function can only be called from @angle_query")

class BuckTranslationUnit(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, target: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TranslationUnit.1 {{ file = {angle_for(__env, file)}, target = {angle_for(__env, target)} }}", TranslationUnit

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, target: Optional["BuckTarget_1"] = None) -> "BuckTranslationUnit":
    raise Exception("this function can only be called from @angle_query")

class BuckTargetIndexerName(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.TargetIndexerName.3 {angle_for(__env, arg)}", TargetIndexerName

  @staticmethod
  def angle_query(*, arg: Optional[str] = None) -> "BuckTargetIndexerName":
    raise Exception("this function can only be called from @angle_query")

class BuckFileResolved(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], buckFile: ast.Expr, srcFile: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.FileResolved.3 {{ buckFile = {angle_for(__env, buckFile)}, srcFile = {angle_for(__env, srcFile)} }}", FileResolved

  @staticmethod
  def angle_query(*, buckFile: Optional["BuckFile"] = None, srcFile: Optional["SrcFile"] = None) -> "BuckFileResolved":
    raise Exception("this function can only be called from @angle_query")

class BuckConsumer(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], source: ast.Expr, consumer: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.Consumer.3 {{ source = {angle_for(__env, source)}, consumer = {angle_for(__env, consumer)} }}", Consumer

  @staticmethod
  def angle_query(*, source: Optional["SrcFile"] = None, consumer: Optional["BuckTargetSources"] = None) -> "BuckConsumer":
    raise Exception("this function can only be called from @angle_query")

class BuckFile(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], arg: ast.Expr) -> Tuple[str, Struct]:
    return f"buck.File.3 {angle_for(__env, arg)}", File

  @staticmethod
  def angle_query(*, arg: Optional[Tuple[()]] = None) -> "BuckFile":
    raise Exception("this function can only be called from @angle_query")


