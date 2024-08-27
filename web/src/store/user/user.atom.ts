import { atom } from "jotai";
interface User {
    name?: string; 
    userId?: string; 
    password?: string; 
    phone?: string; 
}



export const usersAtom = atom<User[]>([]);

export const currentUserAtom = atom<User | null>(null);
