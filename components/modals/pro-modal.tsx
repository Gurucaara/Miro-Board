"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useProModal } from "@/store/use-pro-modal";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Button } from "../ui/button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const ProModal = () => {
  const { isOpen, onClose } = useProModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[340px] p-0 overflow-hidden">
        <div className="aspect-video relative flex items-center justify-center">
          <Image src="/pro.svg" alt="Pro" className="object-fit" fill />
        </div>
        <div
          className={cn(
            "text-neutral-700 mx-auto space-y-6 p-6 ",
            font.className
          )}
        >
          <h2 className="font-medium text-lg">🚀 Upgrade to Pro Today!</h2>
          <div className="pl-3">
            <ul className="text-[14px] space-y-1 list-disc">
              <li>Unlimited Boards</li>
              <li>Unlimited Tools</li>
              <li>Unlimited Organizations</li>
              <li>Unlimited Members</li>
            </ul>
          </div>
          <Button size="sm" className="w-full">
            Upgrade
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
