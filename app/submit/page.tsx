import SectionHeader from "@/components/common/section-header";
import ProductSubmitForm from "@/components/products/product-submit-form";

import { SparkleIcon } from "lucide-react";

export  default function SubmitPage(){
    return (
        <section className="py-20">
        <div className="wrapper">
           <SectionHeader
           title="Submit a Product"
           icon={SparkleIcon}
           description= "Submit your product to the community and get feedback from others."/>
           <div className=" max-w-2xl mx-auto">
            <ProductSubmitForm/>
           </div>
        </div>
    </section>    
);
}