export interface ExperienceItem {
	role: string;
	company: string;
	period: string;
	summary: string;
}

export const experiences: ExperienceItem[] = [
	{
		role: 'Application Developer',
		company: 'VSTECS Philippines Inc.',
		period: 'Sep 2023 - Present',
		summary:
			'Develop and maintain enterprise applications using C#, ASP.NET Core, JavaScript, SQL, and API integrations for core internal workflows.'
	},
	{
		role: 'Web Developer',
		company: 'Proweaver, Inc.',
		period: 'Jun 2022 - Aug 2023',
		summary:
			'Built and maintained web solutions with JavaScript, WordPress, and backend integrations, delivering responsive interfaces and client-focused improvements.'
	}
];
