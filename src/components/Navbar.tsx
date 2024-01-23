"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type Props = {};

const Navbar = (props: Props) => {
	const { setTheme, resolvedTheme } = useTheme();
	function toggleTheme() {
		if (resolvedTheme === "dark") {
			setTheme("light");
		}
		if (resolvedTheme === "light") {
			setTheme("dark");
		}
	}

	return (
		<div className="sticky top-0 z-50 shadow-xl dark:shadow-2xl">
			<div className="flex justify-between max-w-screen-2xl mx-auto mb-8 px-8 dark:bg-slate-900 md:px-14 py-5 items-center transition-all bg-white">
				<Link href={"/"} className="font-bold text-xl md:text-2xl ">
					Where in the world?
				</Link>
				<section onClick={toggleTheme}>
					<div className="flex items-center gap-2 text-xl cursor-pointer">
						{resolvedTheme === "light" ? "light" : "dark"}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Navbar;
