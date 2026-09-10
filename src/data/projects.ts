export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  role: string;
  technologies: string[];
  type: 'Professional' | 'Personal';
}

export const projects: Project[] = [
  {
    id: 'finance-forms-system',
    title: 'Finance Forms',
    description:
      'Finance workflow system for Credit Notes and Accruals used by sales and finance teams, with Oracle EBS integration and Oracle Fusion alignment.',
    impact:
      'Improved coordination between sales and finance by standardizing credit note and accrual workflows across Oracle-connected processes.',
    role: 'Application Developer',
    technologies: [
      'C#',
      'ASP.NET Web App (.NET Framework)',
      'Oracle EBS',
      'Oracle Fusion',
      'Repository Pattern',
      'Clean Code Structure'
    ],
    type: 'Professional'
  },
  {
    id: 'field-sales-report-monitoring-system',
    title: 'Field Sales Report Monitoring System',
    description:
      'Field sales monitoring platform with barcode scanning for serial/IMEI numbers to track product movement and reporting status.',
    impact:
      'Increased traceability and reporting accuracy for field sales operations through barcode-based serial and IMEI validation.',
    role: 'Application Developer',
    technologies: [
      'C#',
      'ASP.NET Core MVC',
      'Barcode Scanning',
      'SQL Server',
      'Repository Pattern',
      'Clean Code Structure'
    ],
    type: 'Professional'
  },
  {
    id: 'payment-request-system',
    title: 'Payment Request System',
    description:
      'Enterprise payment request and approval workflow application.',
    impact:
      'Reduced manual approval follow-ups and improved payment request visibility for internal teams.',
    role: 'Application Developer',
    technologies: [
      'C#',
      'ASP.NET Core',
      'Razor Pages',
      'Entity Framework Core',
      'SQL Server'
    ],
    type: 'Professional'
  },
  {
    id: 'warehouse-system',
    title: 'Warehouse System',
    description:
      'Warehouse and trip ticket management application.',
    impact:
      'Improved warehouse operations tracking and trip ticket processing consistency.',
    role: 'Full-Stack Developer',
    technologies: [
      'C#',
      'ASP.NET Core MVC',
      'Entity Framework Core',
      'SQL Server'
    ],
    type: 'Professional'
  }
];