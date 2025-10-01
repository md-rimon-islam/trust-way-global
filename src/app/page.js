import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./(components)/(Homepage)/Navbar";
import Banner_section_1 from "./(components)/(Homepage)/(Section)/Banner_section_1";
import Banner_section_2 from "./(components)/(Homepage)/(Section)/Banner_section_2";

export default function Home() {
  return (
   <div>
    <Navbar></Navbar>
    <Banner_section_1></Banner_section_1>
    <Banner_section_2></Banner_section_2>
   </div>
  );
}
