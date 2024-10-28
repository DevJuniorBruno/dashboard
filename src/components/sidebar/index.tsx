'use client'

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { Dice1, Dice2, Dice3, Dice4, Dices, DicesIcon, PanelBottom } from "lucide-react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { useEffect } from "react";




export function Sidebar() {
  useEffect(()=>{

    console.log("Sidebar mounted")

  },[])
  return (
    <div className="flex w-full flex-col bg-muted/40" >

      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-column" >



        <nav className="flex flex-col items-center gap-4 px-2 py-5" >

          <Link href="#"
            className="flex h-10 w-10 bg-cyan-700 rounded-full text-lg
                  items-center justify-center text-white md:text-base gap-2"
            prefetch={false}
          >
            <Dices className="h-5 w-5 transition-all" />
            <span className="sr-only" >Logo</span>
          </Link>

          <TooltipProvider>


            <Tooltip>
              <TooltipTrigger asChild>
                
                <Link href="/" target="_self" className="flex h-9 w-9 shrink-0 items-center justify-center text-black rounded-full hover:text-cyan-700">
                  <Dice1 className="h-4 w-4" />
                  <span className="sr-only" ></span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" >Loto-fácil</TooltipContent>
            </Tooltip>



            <Tooltip>
              <TooltipTrigger asChild >
                <Link href="/megasena" className="flex h-9 w-9 shrink-0 items-center justify-center  text-black rounded-full hover:text-cyan-700">
                  <Dice2 className="h-4 w-4" />
                  <span className="sr-only" >Mega-sena</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" >Mega-sena</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild >
                <Link href="/timemania" className="flex h-9 w-9 shrink-0 items-center justify-center  text-black rounded-full hover:text-cyan-700">
                  <Dice3 className="h-4 w-4" />
                  <span className="sr-only text-black" >Time-Mania</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" >Time-Mania</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild >
                <Link href="/duplasena" className="flex h-9 w-9 shrink-0 items-center justify-center  text-black rounded-full hover:text-cyan-700">
                  <Dice4 className="h-4 w-4" />
                  <span className="sr-only" >Dupla - Sena</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" >Dupla - Sena</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14" >
        <header className="sticky top-0 z-30 flex h14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6" >
          <Sheet>
            <SheetTrigger asChild >
              <Button size="icon" variant="outline" className="sm:hidden" >
                <PanelBottom className="w-5 h-5" />
                <span className="sr-only" >Abrir/Fechar</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x" >
              <nav className="grid gap-6 text-lg font-medium">

                <Link href="#"
                  className="flex h-10 w-10 bg-cyan-700 rounded-full text-lg
                  items-center justify-center text-white md:text-base gap-2"
                  prefetch={false}
                >
                  <DicesIcon className="h-5 w-5 transition-all" />
                  <span className="sr-only" >Logo</span>
                </Link>

                <Link href="/"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-cyan-700"
                  prefetch={false}
                >
                  <Dice1 className="h5 w5 transition-all" />
                  LOTOFÁCIL
                </Link>

                <Link href="/megasena"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-cyan-700"
                  prefetch={false}
                >
                  <Dice2 className="h5 w5 transition-all" />
                  MEGASENA
                </Link>

                <Link href="timemania"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-cyan-700"
                  prefetch={false}
                >
                  <Dice3 className="h5 w5 transition-all" />
                  TIMEMANIA
                </Link>

                <Link href="/duplasena"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-cyan-700"
                  prefetch={false}
                >
                  <Dice4 className="h5 w5 transition-all" />
                 DUPLASENA
                </Link>

                

              </nav>


            </SheetContent>


          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>

    </div>
  )
}
