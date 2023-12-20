import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from '../app/components/side-bar/side-bar.component';

export default {
  title: 'Sidebar',
  component: SideBarComponent,
  decorators: [
    moduleMetadata({
      declarations: [SideBarComponent],
      imports: [HttpClientModule],
    }),
  ],
} as Meta;

const Template: Story<SideBarComponent> = (args: SideBarComponent) => ({
  component: SideBarComponent,
  props: args,
  providers: [HttpClient],
});

export const Default = Template.bind({});
Default.args = {};
