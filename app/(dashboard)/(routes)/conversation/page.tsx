"use client";

import { useState } from "react";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Heading from '@/components/heading'
import { MessageSquare } from 'lucide-react'
import {  useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from './constants';
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Chat } from "openai/resources/index.mjs";
function ConversationPage() {
  const router = useRouter();
  const [message, setMessage] = useState<any>()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      propt:""
    }
  })
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values:z.infer<typeof formSchema>)=>{
    try {
      const responce = await fetch("http://localhost:3001/api/conversation", {
        method: "POST",
        body: JSON.stringify( {messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
              role: "user",
              content: values.propt,
          },
      ],}),
        headers: {
          "Content-Type": "application/json",
        }, 
      })
      // console.log(await responce.json());
      const data = await responce.json();
      setMessage(data);
      console.log(data?.content)
    } catch (error) {
      console.log(error);
    }finally{
      router.refresh();
    }
  }
  return(
    <div>
      <Heading 
      title='Conversation'
      description='Our most advanced converation model'
      icon={MessageSquare}
      iconColor='text-violet-500'
      bgColor='bg-violet-500/10'
      /> 
      <div className='px-4 lg:px-8'>
        <div>
          <Form {...form}>
            <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="
            rounded-lg
            border
            w-full
            p-4px-3
            md:px-6
            focus-within:shadow-sm
            grid
            grid-cols-12
            gap-2
            "
            >
              <FormField 
              name="propt"
              render={({field})=>(
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder="Ask something in your mind!"
                    {...field}/>
                  </FormControl>
                </FormItem>
              )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full " disabled={isLoading}>Generate</Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="space-y-4 mt-4">
        <h2 className="text-gray-700 px-5 py-4">{message?.content}</h2>
      </div>
    </div>
  )
}

export default ConversationPage