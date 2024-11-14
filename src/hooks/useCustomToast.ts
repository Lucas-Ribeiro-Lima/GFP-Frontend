import { ServiceResponse } from "@/services";
import { useToast } from "./use-toast";
import { useCallback } from "react";

export function useCustomToast() {
  const { toast } = useToast()

  const toaster = useCallback(async ({ type, message }: ServiceResponse) => {
    toast({
      title: message,
      variant: (type === "success") ? "default" : "destructive"
    })
  }, [toast])

  return { toaster }
}