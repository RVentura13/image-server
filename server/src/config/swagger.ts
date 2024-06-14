import swaggerJSDoc from 'swagger-jsdoc';
import { SwaggerUiOptions } from 'swagger-ui-express';

const options: swaggerJSDoc.Options = {
	swaggerDefinition: {
		openapi: '3.0.2',
		tags: [
			{
				name: 'Users',
				description: 'API operations related to users',
			},
			{
				name: 'Roles',
				description: 'API operations related to users',
			},
			{
				name: 'Permissions',
				description: 'API operations related to users',
			},
		],
		info: {
			title: 'REST API Image-Server rventura.dev',
			version: '1.0.0',
			description: 'API Docs for Image-Server',
		},
	},
	apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);

export const swaggerUiOptions: SwaggerUiOptions = {
	customCss: `
	 .topbar-wrapper .link{
		content: url('https://rventura.dev/logo.svg');
		height: 80px;
		width: auto;
	 }
	 .swagger-ui .topbar {
		background-color: #1a2540
	 }
	 `,
	customSiteTitle: 'Documentación Image-Server rventura.dev',
};
