var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import * as TypeGraphQL from "type-graphql";
import { Todo } from "../../../models/Todo";
import { User } from "../../../models/User";
import { UserTodosArgs } from "./args/UserTodosArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
let UserRelationsResolver = class UserRelationsResolver {
    async todos(user, ctx, info, args) {
        const { _count } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).user.findUniqueOrThrow({
            where: {
                id: user.id,
            },
        }).todos({
            ...args,
            ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [Todo], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User, Object, Object, UserTodosArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "todos", null);
UserRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => User)
], UserRelationsResolver);
export { UserRelationsResolver };
//# sourceMappingURL=UserRelationsResolver.js.map