import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Emailform } from "./email-form";

export const EmailInfo = () => {



  return (
    <Card className="bg-transparent text-white shadow-2xl shadow-black border-[#4a044e] p-0">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">
          Let's <span className="text-purple-500">talk</span>
        </CardTitle>
        <CardDescription className="text-xs md:text-sm text-white">
          Got questions or ideas? Reach out to me directly via email! I’m here
          to assist with inquiries, collaborations, or just a friendly chat.
          Let’s connect!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Emailform/>
      </CardContent>
    </Card>
  );
};
