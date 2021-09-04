import { OpenApiReference as OpenApiReferenceV3 } from '@tstypes/openapi-v3';
import { OpenApiReference as OpenApiReferenceV2 } from '@tstypes/openapi-v2';
type OpenApiReference = OpenApiReferenceV2 | OpenApiReferenceV3;
export function isOpenApiReference<T>(obj: T | OpenApiReference): obj is OpenApiReference {
  return (obj as OpenApiReference).$ref !== undefined;
}
