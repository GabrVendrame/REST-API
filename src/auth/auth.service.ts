import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client";

@Injectable({})

export class AuthService {
    
    signin(){return { msg: 'Signed In Successfuly! :)' }}

    signup(){return { msg: 'Signed Up Successfuly! :)' }}
}