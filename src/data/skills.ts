export interface SkillGroup {
	category: string;
	items: string[];
}

export const skillGroups: SkillGroup[] = [
	{
		category: 'Backend',
		items: ['C#', 'ASP.NET Core', '.NET', 'Entity Framework Core', 'REST APIs']
	},
	{
		category: 'Frontend',
		items: ['React', 'TypeScript', 'JavaScript', 'Bootstrap', 'WordPress', 'CSS']
	},
	{
		category: 'Database, Cloud & Tools',
		items: [
			'SQL Server',
			'Oracle Fusion',
			'Azure Active Directory',
			'OpenAI APIs',
			'Git',
			'Azure DevOps',
			'Postman'
		]
	}
];
