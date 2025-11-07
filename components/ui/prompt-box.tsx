"use client"

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type ClassValue = string | number | boolean | null | undefined;
function cn(...inputs: ClassValue[]): string { return inputs.filter(Boolean).join(" "); }
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & { showArrow?: boolean }>(({ className, sideOffset = 4, showArrow = false, ...props }, ref) => ( <TooltipPrimitive.Portal><TooltipPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn("relative z-50 max-w-[280px] rounded-md bg-popover text-popover-foreground px-1.5 py-1 text-xs animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)} {...props}>{props.children}{showArrow && <TooltipPrimitive.Arrow className="-my-px fill-popover" />}</TooltipPrimitive.Content></TooltipPrimitive.Portal>));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props }, ref) => ( <DialogPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)} {...props} />));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props }, ref) => ( <DialogPortal><DialogOverlay /><DialogPrimitive.Content ref={ref} className={cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-[90vw] md:max-w-[800px] translate-x-[-50%] translate-y-[-50%] gap-4 border-none bg-transparent p-0 shadow-none duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className)} {...props}><div className="relative bg-card dark:bg-[#303030] rounded-[28px] overflow-hidden shadow-2xl p-1">{children}<DialogPrimitive.Close className="absolute right-3 top-3 z-10 rounded-full bg-background/50 dark:bg-[#303030] p-1 hover:bg-accent dark:hover:bg-[#515151] transition-all"><XIcon className="h-5 w-5 text-muted-foreground dark:text-gray-200 hover:text-foreground dark:hover:text-white" /><span className="sr-only">Close</span></DialogPrimitive.Close></div></DialogPrimitive.Content></DialogPortal>));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}> <path d="M12 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> </svg> );
const Settings2Icon = (props: React.SVGProps<SVGSVGElement>) => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}> <path d="M20 7h-9" /> <path d="M14 17H5" /> <circle cx="17" cy="17" r="3" /> <circle cx="7" cy="7" r="3" /> </svg> );
const SendIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}> <path d="M12 5.25L12 18.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M18.75 12L12 5.25L5.25 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg> );
const XIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}> <line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" /> </svg> );
const AudioLinesIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}> <path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/> </svg> );

interface Attachment {
  type: string
  text: string
  savedFile?: string
  savedPath?: string
  fileName?: string
}

interface PromptBoxProps {
  onSend?: (prompt: string, tool?: string, attachments?: Attachment[]) => void
  onModelChange?: (model: string) => void
  onVoiceClick?: () => void
  placeholder?: string
  disabled?: boolean
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const PromptBox = React.forwardRef<HTMLTextAreaElement, PromptBoxProps>(
  ({ onSend, onModelChange, onVoiceClick, placeholder, disabled, className, onChange: props }, ref) => {
    const internalTextareaRef = React.useRef<HTMLTextAreaElement>(null);
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [value, setValue] = React.useState("");
    const [imagePreview, setImagePreview] = React.useState<string | null>(null);
    const [attachments, setAttachments] = React.useState<Attachment[]>([]);
    const [uploading, setUploading] = React.useState(false);
    
    React.useImperativeHandle(ref, () => internalTextareaRef.current!, []);
    React.useLayoutEffect(() => { const textarea = internalTextareaRef.current; if (textarea) { textarea.style.height = "auto"; const newHeight = Math.min(textarea.scrollHeight, 200); textarea.style.height = `${newHeight}px`; } }, [value]);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { 
      setValue(e.target.value);
      if (props) props(e);
    };
    
    const handlePlusClick = () => { fileInputRef.current?.click(); };
    
    const hasValue = value.trim().length > 0 || imagePreview;
    
    return (
      <div className={cn("flex flex-col rounded-[28px] p-2 shadow-sm transition-colors bg-white border border-gray-200 cursor-text", className)}>
        <input type="file" ref={fileInputRef} className="hidden" accept="image/*,application/pdf,.doc,.docx,.txt,.ppt,.pptx"/>
        
        <div className="relative">
          <textarea ref={internalTextareaRef} rows={1} value={value} onChange={handleInputChange} onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              if (hasValue && onSend && !uploading) {
                onSend(value, undefined, attachments);
                setValue('');
                setImagePreview(null);
                setAttachments([]);
              }
            }
          }} placeholder={placeholder || "Ask me anything..."} disabled={disabled} className="custom-scrollbar w-full resize-none border-0 bg-transparent p-3 text-black placeholder:text-gray-400 focus:ring-0 focus-visible:outline-none min-h-12" />
        </div>
        
        <div className="mt-0.5 p-1 pt-0">
          <TooltipProvider delayDuration={100}>
            <div className="flex items-center gap-2">
              <Tooltip> <TooltipTrigger asChild><button type="button" onClick={handlePlusClick} disabled={uploading} className="flex h-8 w-8 items-center justify-center rounded-full text-black transition-colors hover:bg-gray-100 focus-visible:outline-none disabled:opacity-50"><PlusIcon className="h-6 w-6" /><span className="sr-only">Attach file</span></button></TooltipTrigger> <TooltipContent side="top" showArrow={true}><p>Attach file</p></TooltipContent> </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    type="button" 
                    className="flex h-8 items-center gap-2 rounded-full px-3 py-2 text-sm text-black transition-colors hover:bg-gray-100 focus-visible:outline-none"
                  >
                    <Settings2Icon className="h-4 w-4" />
                    <span className="text-xs">Apps</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" showArrow={true}><p>Connect workspace apps</p></TooltipContent>
              </Tooltip>

              <div className="ml-auto flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" onClick={onVoiceClick} className="flex h-8 w-8 items-center justify-center rounded-full text-black transition-colors hover:bg-gray-100 focus-visible:outline-none">
                      <AudioLinesIcon className="h-5 w-5" />
                      <span className="sr-only">Voice chat</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" showArrow={true}><p>Voice chat</p></TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      type="button" 
                      disabled={!hasValue || uploading} 
                      onClick={() => {
                        if (hasValue && onSend && !uploading) {
                          onSend(value, undefined, attachments)
                          setValue("")
                          setImagePreview(null)
                          setAttachments([])
                        }
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none bg-black text-white hover:bg-gray-800 disabled:opacity-50"
                    >
                      <SendIcon className="h-6 w-6" />
                      <span className="sr-only">Send message</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" showArrow={true}><p>Send</p></TooltipContent>
                </Tooltip>
              </div>
            </div>
          </TooltipProvider>
        </div>
      </div>
    );
  }
);
PromptBox.displayName = "PromptBox";
