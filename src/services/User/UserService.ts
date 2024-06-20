import prismaClient from "../../prisma";

class UserService{
    async ex(userID: string){
        const i = parseInt(userID)
        const user = await prismaClient.researcher.findFirst({
            where: {
                id: i,
            }, select: {
                name: true,
                email: true,
            }
        });
        return user;
    }
}
export { UserService }