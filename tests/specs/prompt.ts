import { expect, testSuite } from 'manten';
import { generatePrompt } from '../../src/utils/prompt.js';

export default testSuite(({ describe }) => {
	describe('prompt', ({ test }) => {
		test('adds Chinese output guidance for zh-CN locale', () => {
			const prompt = generatePrompt('zh-CN', 72, 'conventional');

			expect(prompt).toContain('Message language: zh-CN');
			expect(prompt).toContain('use concise Simplified Chinese');
			expect(prompt).toContain('Do not translate the commit type');
		});

		test('does not add Chinese output guidance for en locale', () => {
			const prompt = generatePrompt('en', 72, 'conventional');

			expect(prompt).toContain('Message language: en');
			expect(prompt).not.toContain('use concise Simplified Chinese');
			expect(prompt).not.toContain('Do not translate the commit type');
		});
	});
});