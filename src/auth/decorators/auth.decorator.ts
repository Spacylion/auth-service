// import { applyDecorators, UseGuards } from '@nestjs/common'
// import { UserRole } from '@prisma/__generated__'
// import { Roles } from '@/auth/decorators/roles.decorator'
//
//
//
// export function Authorization(...roles: UserRole[]) {
// 	if (roles.length > 0) {
// 		return applyDecorators(
// 			Roles(...roles),
// 			UseGuards(AuthGuard, RolesGuard)
// 		)
// 	}
//
// 	return applyDecorators(UseGuards(AuthGuard))
// }