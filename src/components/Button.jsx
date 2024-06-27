function Button ({text, link, isDark}) {
    return (
        <a
							className={"text-sm mt-1 portrait:pt2:max-ls:w-2/3" + (text.length <= 3 ? " landscape:w-1/5 landscape:ls2:w-1/6" : "") + (text.length === 4 ? " landscape:w-1/4 landscape:ls2:w-1/5" : "") + (text.length > 4 ? " landscape:w-1/3 landscape:ls2:w-1/4" : "")}
							href={link}
							target="_blank"
						>
							<div
								className={
									"relative overflow-hidden border-b-[0.35rem] transition-all after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:duration-500 landscape:landscape:ls1:hover:after:h-full px-1 landscape:w-[9%] landscape:pt:max-ls1:border-b-2  landscape:pt:max-ls1:w-full" +
									(isDark
										? " text-dark-text landscape:hover:text-dark-bg border-my-red-dark after:bg-my-red-dark"
										: " text-black landscape:hover:text-light-bg border-my-red-light after:bg-my-red-light") +
                                        (text.length <= 3 ? " portrait:w-1/3 portrait:max-pt3:w-1/4 portrait:ls:w-1/5 landscape:w-full" : "") + (text.length === 4 ? " portrait:w-1/2 portrait:max-pt3:w-1/3 portrait:ls:w-1/4  landscape:w-full" : "") + (text.length > 4 ? " portrait:w-2/3 portrait:max-pt3:w-1/2 portrait:ls:w-1/3 landscape:w-full" : "")
								}
							>
								<span className="relative z-10 text-sm portrait:max-pt3:text-xs portrait:max-pt1:text-[3.5vw] landscape:pt:max-ls1:text-[0.9vw]">
									{text}
								</span>
							</div>
						</a>
    )
}

export default Button;