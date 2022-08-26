# @generated
# To regenerate this file run fbcode//glean/schema/gen/sync
from typing import Optional, Tuple, Union, List
from thrift.py3 import Struct
from glean.schema.py.glean_schema_predicate import GleanSchemaPredicate, concatenateFields


from glean.schema.lionhead.types import (
    CoveredHarness,
    FbId,
)


class LionheadCoveredHarness(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"lionhead.CoveredHarness.1 {{ }}", CoveredHarness
    return f"lionhead.CoveredHarness.1 { concatenateFields(key) }", CoveredHarness

  @staticmethod
  def angle_query(*, harnessId: Optional[Tuple[()]] = None, root: Optional[Tuple[()]] = None) -> "LionheadCoveredHarness":
    raise Exception("this function can only be called from @angle_query")

class LionheadFbId(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"lionhead.FbId.1 {{ }}", FbId
    return f"lionhead.FbId.1 {key}", FbId

  @staticmethod
  def angle_query(*, arg: Optional[int] = None) -> "LionheadFbId":
    raise Exception("this function can only be called from @angle_query")


