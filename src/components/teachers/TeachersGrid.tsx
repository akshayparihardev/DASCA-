"use client";

import { Teacher } from "@/data/teachers";
import { TeacherCard } from "./TeacherCard";

interface TeachersGridProps {
    teachers: Teacher[];
    className?: string;
}

export const TeachersGrid = ({ teachers, className }: TeachersGridProps) => {
    return (
        <div className={className}>
            <div className="flex flex-wrap justify-center gap-8">
                {teachers.map((teacher, index) => (
                    <TeacherCard
                        key={teacher.id}
                        teacher={teacher}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeachersGrid;
