"use client";

import React from "react";

const stats = [
    {
        value: "20",
        label: "Lat Doświadczenia",
    },
    {
        value: "450",
        label: "Zrealizowanych Projektów",
    },
    {
        value: "300",
        label: "Zadowolonych Klientów",
    },
    {
        value: "100",
        label: "Procent Profesjonalizmu",
    },
];

export default function StatsSection() {
    return (
        <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-2xl bg-gray-900 border border-gray-800 p-8 shadow-2xl md:p-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center text-center sm:border-r sm:border-gray-800 last:border-0"
                            >
                                <div className="text-4xl font-bold text-white md:text-5xl mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium uppercase tracking-wider text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
