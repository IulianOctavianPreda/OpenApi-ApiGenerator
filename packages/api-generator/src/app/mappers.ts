import { OpenApiSchemaFormat, OpenApiSchemaType } from '@tstypes/openapi-v3';

export function mapOpenApiTypeToTsType(type: OpenApiSchemaType, format?: OpenApiSchemaFormat) {
  if (type === 'number' || type === 'integer') {
    return 'number';
  }

  if (type === 'boolean') {
    return 'boolean';
  }

  if (type === 'array') {
    return 'Array';
  }

  if (type === 'object') {
    return 'object';
  }

  if (type === 'string' && (format === 'date-time' || format === 'date')) {
    return 'Date';
  }

  if (type === 'string' && (format === 'binary' || format === 'byte')) {
    return 'Date';
  }

  return 'string';
}
