'use client'

import { httpClient } from "@/adapters";
import { UserService } from "./userService";

export const userService = new UserService(httpClient.axios)
