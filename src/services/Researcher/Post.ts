import prismaClient from "../../prisma"
import { hash } from "bcryptjs";

interface ResearcherRequest{
    name: string;
    email: string;
    cpf: string;
    password: string;
}

class PostResearcherService {
    async execute({ name, email, cpf, password }: ResearcherRequest) {

        //Verificação
        if (!email || !name || !cpf) {
            throw new Error("Incomplete Data");
        }
        //Verificar Se existe
        const researcherExist = await prismaClient.researcher.findFirst({
            where: {
                email: email,
                cpf: cpf,
            }
        });

        if (researcherExist) {
            throw new Error("Already Registered Researcher");
        }

        const passwordHash = await hash(password, 8);

        const researcher = await prismaClient.researcher.create({
            data: {
                name: name,
                email: email,
                cpf: cpf,
                password: passwordHash,
            },
            select:{
                name: true,
                email: true,
            }
        });

        return researcher;
    }
}

export { PostResearcherService };