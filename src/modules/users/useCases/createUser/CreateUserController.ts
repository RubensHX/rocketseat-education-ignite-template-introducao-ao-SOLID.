import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, email } = request.body;

        if (email === request.body.email) {
            return response.status(400).json({
                message: "Email already exists",
            });
        }
        return response.send(this.createUserUseCase.execute({ name, email }));
    }
}

export { CreateUserController };
