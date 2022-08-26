# @generated
# To regenerate this file run fbcode//glean/schema/gen/sync
from typing import Optional, Tuple, Union, List
from thrift.py3 import Struct
from glean.schema.py.glean_schema_predicate import GleanSchemaPredicate, concatenateFields


from glean.schema.codemarkuphack.types import (
    HackHackEntityInfo,
    HackHackEntityLocation,
    HackHackVisibility,
    HackHackAnnotation,
    HackHackResolveLocation,
    HackHackContainsChildEntity,
    HackHackFileEntityXRefLocations,
    HackHackEntityUses,
    HackHackEntityKind,
    HackHackFileEntityXRefSpans,
)


class CodemarkupHackHackEntityInfo(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.hack.HackEntityInfo.2 {{ }}", HackHackEntityInfo
    return f"codemarkup.hack.HackEntityInfo.2 { concatenateFields(key) }", HackHackEntityInfo

  @staticmethod
  def angle_query(*, entity: Optional[Tuple[()]] = None, info: Optional[Tuple[()]] = None) -> "CodemarkupHackHackEntityInfo":
    raise Exception("this function can only be called from @angle_query")

class CodemarkupHackHackEntityLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.hack.HackEntityLocation.2 {{ }}", HackHackEntityLocation
    return f"codemarkup.hack.HackEntityLocation.2 { concatenateFields(key) }", HackHackEntityLocation

  @staticmethod
  def angle_query(*, entity: Optional[Tuple[()]] = None, location: Optional[Tuple[()]] = None) -> "CodemarkupHackHackEntityLocation":
    raise Exception("this function can only be called from @angle_query")

class CodemarkupHackHackVisibility(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.hack.HackVisibility.2 {{ }}", HackHackVisibility
    return f"codemarkup.hack.HackVisibility.2 { concatenateFields(key) }", HackHackVisibility

  @staticmethod
  def angle_query(*, entity: Optional[Tuple[()]] = None, visibility: Optional[Tuple[()]] = None) -> "CodemarkupHackHackVisibility":
    raise Exception("this function can only be called from @angle_query")

class CodemarkupHackHackAnnotation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.hack.HackAnnotation.2 {{ }}", HackHackAnnotation
    return f"codemarkup.hack.HackAnnotation.2 { concatenateFields(key) }", HackHackAnnotation

  @staticmethod
  def angle_query(*, entity: Optional[Tuple[()]] = None, anns: Optional[Tuple[()]] = None) -> "CodemarkupHackHackAnnotation":
    raise Exception("this function can only be called from @angle_query")

class CodemarkupHackHackResolveLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.hack.HackResolveLocation.2 {{ }}", HackHackResolveLocation
    return f"codemarkup.hack.HackResolveLocation.2 { concatenateFields(key) }", HackHackResolveLocation

  @staticmethod
  def angle_query(*, location: Optional[Tuple[()]] = None, entity: Optional[Tuple[()]] = None) -> "CodemarkupHackHackResolveLocation":
    raise Exception("this function can only be called from @angle_query")

class CodemarkupHackHackContainsChildEntity(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.hack.HackContainsChildEntity.2 {{ }}", HackHackContainsChildEntity
    return f"codemarkup.hack.HackContainsChildEntity.2 { concatenateFields(key) }", HackHackContainsChildEntity

  @staticmethod
  def angle_query(*, parent: Optional[Tuple[()]] = None, child: Optional[Tuple[()]] = None) -> "CodemarkupHackHackContainsChildEntity":
    raise Exception("this function can only be called from @angle_query")

class CodemarkupHackHackFileEntityXRefLocations(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.hack.HackFileEntityXRefLocations.2 {{ }}", HackHackFileEntityXRefLocations
    return f"codemarkup.hack.HackFileEntityXRefLocations.2 { concatenateFields(key) }", HackHackFileEntityXRefLocations

  @staticmethod
  def angle_query(*, file: Optional[Tuple[()]] = None, xref: Optional[Tuple[()]] = None, entity: Optional[Tuple[()]] = None) -> "CodemarkupHackHackFileEntityXRefLocations":
    raise Exception("this function can only be called from @angle_query")

class CodemarkupHackHackEntityUses(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.hack.HackEntityUses.2 {{ }}", HackHackEntityUses
    return f"codemarkup.hack.HackEntityUses.2 { concatenateFields(key) }", HackHackEntityUses

  @staticmethod
  def angle_query(*, target: Optional[Tuple[()]] = None, file: Optional[Tuple[()]] = None, span: Optional[Tuple[()]] = None) -> "CodemarkupHackHackEntityUses":
    raise Exception("this function can only be called from @angle_query")

class CodemarkupHackHackEntityKind(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.hack.HackEntityKind.2 {{ }}", HackHackEntityKind
    return f"codemarkup.hack.HackEntityKind.2 { concatenateFields(key) }", HackHackEntityKind

  @staticmethod
  def angle_query(*, entity: Optional[Tuple[()]] = None, kind: Optional[Tuple[()]] = None) -> "CodemarkupHackHackEntityKind":
    raise Exception("this function can only be called from @angle_query")

class CodemarkupHackHackFileEntityXRefSpans(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.hack.HackFileEntityXRefSpans.2 {{ }}", HackHackFileEntityXRefSpans
    return f"codemarkup.hack.HackFileEntityXRefSpans.2 { concatenateFields(key) }", HackHackFileEntityXRefSpans

  @staticmethod
  def angle_query(*, file: Optional[Tuple[()]] = None, span: Optional[Tuple[()]] = None, entity: Optional[Tuple[()]] = None) -> "CodemarkupHackHackFileEntityXRefSpans":
    raise Exception("this function can only be called from @angle_query")


