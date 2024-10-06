import { generateReactHelpers } from "@uploadthing/react";
 
import type { OurFileRouter } from "@/app/api/uploadThing/core";
 
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();