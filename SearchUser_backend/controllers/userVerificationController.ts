import { Request, Response } from 'express';
import * as fs from 'fs';

interface User {
  email: string;
  number: string;
}

const emailListJson = fs.readFileSync('./data/emailList.json', 'utf-8');
const emailList: User[] = JSON.parse(emailListJson);

const userVerification = async (req: Request, res: Response): Promise<void> => {
  try {
    setTimeout(async () => {
      const { email, number } = req.body;
      const existingEmail = emailList.find((item) => item.email === email);
      const existingNumber = emailList.find((item) => item.number === number);
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      if (email) {
        if (!existingEmail) {
          res.status(404).json({
            message: `Нет такой почты ${email}, которую вы запросили`,
          });
          return;
        }
        if (!emailRegex.test(email)) {
          res.status(401).json({ message: 'Введите корректный Email адрес' });
          return;
        }
      }

      if (number) {
        if (!existingNumber) {
          res.status(404).json({
            message: `Нет такого номера ${number}, которое вы запросили`,
          });
          return;
        }
      }

      if (email && number) {
        const resultUser = emailList.filter(
          (item) => item.email === email && item.number === number
        );
        res.status(200).json(resultUser);
      } else {
        const resultUser = emailList.filter(
          (item) => item.email === email || item.number === number
        );
        res.status(200).json(resultUser);
      }
    }, 5000);
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
};

export default { userVerification };
