export function isGbnfJsonConstSchema(schema) {
    return schema.const !== undefined;
}
export function isGbnfJsonEnumSchema(schema) {
    return schema.enum != null;
}
export function isGbnfJsonOneOfSchema(schema) {
    return schema.oneOf != null;
}
export function isGbnfJsonObjectSchema(schema) {
    return schema.type === "object";
}
export function isGbnfJsonArraySchema(schema) {
    return schema.type === "array";
}
export function isGbnfJsonBasicSchemaIncludesType(schema, type) {
    if (schema.type instanceof Array)
        return schema.type.includes(type);
    return schema.type === type;
}
//# sourceMappingURL=types.js.map