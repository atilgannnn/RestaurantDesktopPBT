import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContentComponent } from '../app/components/content/content.component';

export default {
  title: 'Content',
  component: ContentComponent,
  decorators: [
    moduleMetadata({
      declarations: [ContentComponent],
      imports: [HttpClientModule],
    }),
  ],
} as Meta;

const Template: Story<ContentComponent> = (args: ContentComponent) => ({
  component: ContentComponent,
  props: args,
  providers: [HttpClient],
});

export const Default = Template.bind({});
Default.args = {};
