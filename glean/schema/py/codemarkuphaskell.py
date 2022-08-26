# @generated
# To regenerate this file run fbcode//glean/schema/gen/sync
from typing import Optional, Tuple, Union, List
from thrift.py3 import Struct
from glean.schema.py.glean_schema_predicate import GleanSchemaPredicate, concatenateFields


from glean.schema.codemarkuphaskell.types import (
    HaskellHaskellEntityLocation,
    HaskellHaskellResolveLocation,
    HaskellHaskellFileEntityXRefLocations,
    HaskellHaskellEntityUses,
)


class CodemarkupHaskellHaskellEntityLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.haskell.HaskellEntityLocation.2 {{ }}", HaskellHaskellEntityLocation
    return f"codemarkup.haskell.HaskellEntityLocation.2 { concatenateFields(key) }", HaskellHaskellEntityLocation

  @staticmethod
  def angle_query(*, entity: Optional[Tuple[()]] = None, location: Optional[Tuple[()]] = None) -> "CodemarkupHaskellHaskellEntityLocation":
    raise Exception("this function can only be called from @angle_query")

class CodemarkupHaskellHaskellResolveLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.haskell.HaskellResolveLocation.2 {{ }}", HaskellHaskellResolveLocation
    return f"codemarkup.haskell.HaskellResolveLocation.2 { concatenateFields(key) }", HaskellHaskellResolveLocation

  @staticmethod
  def angle_query(*, location: Optional[Tuple[()]] = None, entity: Optional[Tuple[()]] = None) -> "CodemarkupHaskellHaskellResolveLocation":
    raise Exception("this function can only be called from @angle_query")

class CodemarkupHaskellHaskellFileEntityXRefLocations(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.haskell.HaskellFileEntityXRefLocations.2 {{ }}", HaskellHaskellFileEntityXRefLocations
    return f"codemarkup.haskell.HaskellFileEntityXRefLocations.2 { concatenateFields(key) }", HaskellHaskellFileEntityXRefLocations

  @staticmethod
  def angle_query(*, file: Optional[Tuple[()]] = None, xref: Optional[Tuple[()]] = None, entity: Optional[Tuple[()]] = None) -> "CodemarkupHaskellHaskellFileEntityXRefLocations":
    raise Exception("this function can only be called from @angle_query")

class CodemarkupHaskellHaskellEntityUses(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"codemarkup.haskell.HaskellEntityUses.2 {{ }}", HaskellHaskellEntityUses
    return f"codemarkup.haskell.HaskellEntityUses.2 { concatenateFields(key) }", HaskellHaskellEntityUses

  @staticmethod
  def angle_query(*, target: Optional[Tuple[()]] = None, file: Optional[Tuple[()]] = None, span: Optional[Tuple[()]] = None) -> "CodemarkupHaskellHaskellEntityUses":
    raise Exception("this function can only be called from @angle_query")


