"use client";

import { addOne, initCounterState, restOne } from "@/store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";

interface Props {
	value: number;
}

export const CartCunter = ({ value = 0 }: Props) => {
	const count = useAppSelector((state) => state.counter);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(initCounterState(value));
	}, [dispatch, value]);

	return (
		<>
			<span className="text-9xl text-violet-800">{count.count}</span>
			<div className="flex items-center justify-between  w-50 p-2  ">
				<button onClick={() => dispatch(restOne())} className="flex items-center justify-center p-2 rounded-xl bg-gray-700 text-white hover:bg-violet-300 w-[117px] mr-2">
					-1
				</button>
				<button onClick={() => dispatch(addOne())} className="flex items-center justify-center p-2 rounded-xl bg-gray-700 text-white hover:bg-violet-300 w-[117px]">
					+1
				</button>
			</div>
		</>
	);
};
