import { error } from "console";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";


interface FormFieldProps{
    label:string;
    name:string;
    id:string;
    placeholder?:string;
    required:boolean;
    onChange:(e:
        React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>    
    )=>void;
    error:string;
    helperText?:string;
    textarea?:boolean;

}

export  const FormField=({
    label,
    name,
    id,
    placeholder,
    required,
    onChange,
    error,
    helperText,
    textarea= false,
}: FormFieldProps)=>{
    return(
        <div className="space-y-2">
            <Label htmlFor={id}>{label}</Label>
            {textarea ?(
            <Textarea
            id={id}
            name={name} 
            placeholder={placeholder}
            required={required}
            onChange={onChange as (e:React.ChangeEvent<HTMLTextAreaElement>)=>void} 
            
            /> ):( 
            <Input
            id={id}
            name={name} 
            placeholder={placeholder}
            required={required}
            onChange={onChange as (e:React.ChangeEvent<HTMLInputElement>)=>void} 
            
            />  )}
            {helperText && <p className="text-xs text-foreground/50">{helperText}</p>} 
            {error && <p className="text-destructive">{error}</p>}
        </div>
    )
}
