# @generated
# To regenerate this file run fbcode//glean/schema/gen/sync
from typing import Optional, Tuple, Union, List
from thrift.py3 import Struct
from glean.schema.py.glean_schema_predicate import GleanSchemaPredicate, concatenateFields


from glean.schema.sys.types import (
    Blob,
)


class SysBlob(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[int, bool, str, Tuple[()], List[Tuple[str, str]]]) -> Tuple[str, Struct]:
    if key is None:
      return f"sys.Blob.1 {{ }}", Blob
    return f"sys.Blob.1 {key}", Blob

  @staticmethod
  def angle_query(*, arg: Optional[Tuple[()]] = None) -> "SysBlob":
    raise Exception("this function can only be called from @angle_query")


