import { NextFunction, Request, Response } from 'express';
import DialogServise from '../sevices/dialog.service';
import userService from '../sevices/user.service';
import ApiError from '../exceptions/api-error';

class DialogController {
   async createDialog(req: Request, res: Response, next: NextFunction) {
      try {
         const { participants } = req.body;
         const { dialogData } = await DialogServise.CreateDialog(participants);
         const joiner = await userService.getUser(participants[1]);
         res.status(200).json({
            dialogItem: dialogData.id,
            companion: joiner,
         });
      } catch (error) {
         next(error);
      }
   }

   async getAllComponions(req: Request, res: Response, next: NextFunction) {
      try {
         const { userId } = req.params;
         const dialogsData = await DialogServise.getAllCompanions(userId);
         res.status(200).json(dialogsData);
      } catch (error) {
         next(error);
      }
   }

   async getOneDialog(req: Request, res: Response, next: NextFunction) {}
}

export default new DialogController();
