"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormField } from "../forms/form-field";

export default function ProductSubmitForm(){
    return (

        <form className="space-y-6">
           <FormField
             label="Product Name"
             id="name"
             name="name" 
             placeholder="Enter product name"
             required
             onChange={()=>{}} 
             error=""/>   
             <FormField
             label="Slug"
             name="slug"
             id="slug" 
             placeholder="Enter product slug"
             required
             onChange={()=>{}} 
             error=""
             helperText="Slug must be unique"
             />   
             <FormField
             label="Slug"
             name="slug"
             id="slug" 
             placeholder="Enter product slug"
             required
             onChange={()=>{}} 
             error=""
             />   
             
             <FormField
             label="Tagline"
             name="tagline"
             id="tagline" 
             placeholder="A short catchy tagline for your product"
             required
             onChange={()=>{}} 
             error=""
             />   
             <FormField
             label="Description"
             name="description"
             id="description" 
             placeholder="Enter the description of your product"
             required
             onChange={()=>{}} 
             error=""
             textarea
             />   
             <FormField
             label="Website URL"
             name="websiteURl"
             id="websiteURL" 
             placeholder="Enter your product's website URL"
             required
             onChange={()=>{}} 
             error=""
             />   
             <FormField
             label="Tags"
             name="tags"
             id="tags" 
             placeholder="Ai, productivity, SaaS"
             required
             onChange={()=>{}} 
             error=""
             helperText="Comma-seperated tags (e.g Ai, SaaS, Productivity)"
             />   
           
        </form>
    );
}