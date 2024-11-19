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
import { GroupByTodoArgs } from "./args/GroupByTodoArgs";
import { Todo } from "../../../models/Todo";
import { TodoGroupBy } from "../../outputs/TodoGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext } from "../../../helpers";
let GroupByTodoResolver = class GroupByTodoResolver {
    async groupByTodo(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
        return getPrismaFromContext(ctx).todo.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => [TodoGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByTodoArgs]),
    __metadata("design:returntype", Promise)
], GroupByTodoResolver.prototype, "groupByTodo", null);
GroupByTodoResolver = __decorate([
    TypeGraphQL.Resolver(_of => Todo)
], GroupByTodoResolver);
export { GroupByTodoResolver };
//# sourceMappingURL=GroupByTodoResolver.js.map