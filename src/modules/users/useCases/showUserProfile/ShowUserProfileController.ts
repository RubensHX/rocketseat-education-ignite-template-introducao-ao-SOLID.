import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

    handle(request: Request, response: Response): Response {
        const { userId } = request.params;

        if (!userId) {
            return response.status(400).json({
                message: "User doesn't exist",
            });
        }

        const user = this.showUserProfileUseCase.execute(userId);

        return response.status(200).json(user);
    }
}

export { ShowUserProfileController };
