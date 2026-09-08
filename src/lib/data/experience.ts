export interface Experience {
    role: string;
    company: string;
    start: string;
    end: string;
    description: string;
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        role: 'Full Stack Software Developer',
        company: 'Peraton (Public-Trust Clearance)',
        start: '2026-05',
        end: '2026-08',
        description:
            'Migrated a calibration logging workflow into an enterprise .NET application to support auditing requirements. Designed the database, built the audit logging pipeline, and developed the application independently from requirements through implementation.',
        technologies: ['C#', 'SQL', '.NET']
    },
    {
        role: 'Full Stack Software Developer',
        company: 'EnVisage Consulting',
        start: '2024-08',
        end: '2025-05',
        description:
            'Developed and maintained backend features for Ruby on Rails applications. Improved existing code and application performance to reduce load times.',
        technologies: ['Ruby', 'JavaScript', 'Ruby on Rails']
    },
    {
        role: 'IT Support Technician',
        company: 'Kansas State University, College of Business Administration',
        start: '2024-05',
        end: '2024-08',
        description:
            'Provided technical support to students and faculty, assisting with software and hardware issues.',
        technologies: []
    }
];