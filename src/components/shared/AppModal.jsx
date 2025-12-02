// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const AppModal = ({ modalTrigger, modalContent }) => (
  <Dialog>
    <DialogTrigger asChild>{modalTrigger}</DialogTrigger>
    <DialogContent className="p-0 m-0 overflow-hidden w-[95%] lg:w-[70%] border-none outline-none rounded-2xl max-w-[1290px]">
      <DialogTitle className="sr-only">Title</DialogTitle>
      {modalContent}
    </DialogContent>
  </Dialog>
);

export default AppModal;
