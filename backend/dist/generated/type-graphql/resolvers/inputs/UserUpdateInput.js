var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import * as TypeGraphQL from "type-graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TodoUpdateManyWithoutUserNestedInput } from "../inputs/TodoUpdateManyWithoutUserNestedInput";
let UserUpdateInput = class UserUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TodoUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateInput.prototype, "todos", void 0);
UserUpdateInput = __decorate([
    TypeGraphQL.InputType("UserUpdateInput", {})
], UserUpdateInput);
export { UserUpdateInput };
//# sourceMappingURL=UserUpdateInput.js.map