/**
 * This needs:
 * 1. Summary 'About me' for home page
 * 2. Dedicated 'About me' for an 'About me' page
 * 3. Qualifications
 * 4. Specialisations
 * 5. Focus areas
 * 
 * 
 */

import type { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types'
import type { GlobalConfig } from 'payload/types'

const About: GlobalConfig= {
  slug: 'about',
  label: 'About Content',
  fields: [
    {
      name: 'summaryAboutContent',
      type: 'richText',
      admin: {
        description: 'The content for your home page'
      }
    },
    {
      name: 'aboutContent',
      type: 'richText',
      admin: {
        description: 'The content for your dedicated About Me page'
      }
    },
    {
      name: 'qualifications',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text'
        },
        {
          name:'description',
          type: 'richText'
        }
      ],
      admin:{
        components:{
          RowLabel: ({data, index}: RowLabelArgs) =>{
            return data.title
          }
        },
      },
    },
    {
      name: 'specialisations',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text'
        },
        {
          name:'description',
          type: 'richText'
        }
      ],
      admin:{
        components:{
          RowLabel: ({data, index}: RowLabelArgs) =>{
            return data.title
          }
        },
      },
    },
    {
      name: 'focusAreas',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text'
        },
        {
          name:'description',
          type: 'richText'
        }
      ],
      admin:{
        components:{
          RowLabel: ({data, index}: RowLabelArgs) =>{
            return data.title
          }
        },
      },
    }
  ],
}

export default About