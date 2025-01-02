'use client';

import { useLanguage } from '@/lib/context/language';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Loader2 } from 'lucide-react';
import { useSettings } from '@/lib/hooks/useSettings';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  message: ''
};

export default function ContactPage() {
  const { language } = useLanguage();
  const { settings, loading } = useSettings();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    tr: {
      title: 'İletişim',
      description: 'Benimle iletişime geçmek için aşağıdaki kanalları kullanabilir veya formu doldurabilirsiniz.',
      contact: {
        email: 'E-posta',
        location: 'Konum',
        social: 'Sosyal Medya'
      },
      loading: 'Yükleniyor...',
      form: {
        name: {
          label: 'Adınız',
          placeholder: 'Adınızı giriniz',
          required: 'Ad alanı zorunludur',
          min: 'Ad en az 2 karakter olmalıdır',
          max: 'Ad en fazla 50 karakter olabilir'
        },
        email: {
          label: 'E-posta',
          placeholder: 'E-posta adresinizi giriniz',
          required: 'E-posta alanı zorunludur',
          invalid: 'Geçerli bir e-posta adresi giriniz'
        },
        message: {
          label: 'Mesaj',
          placeholder: 'Mesajınızı giriniz',
          required: 'Mesaj alanı zorunludur',
          min: 'Mesaj en az 10 karakter olmalıdır',
          max: 'Mesaj en fazla 1000 karakter olabilir'
        },
        submit: 'Mesaj Gönder',
        submitting: 'Gönderiliyor...',
        success: 'Mesajınız başarıyla gönderildi.',
        error: 'Mesaj gönderilirken bir hata oluştu.'
      }
    },
    en: {
      title: 'Contact',
      description: 'You can use the channels below or fill out the form to get in touch with me.',
      contact: {
        email: 'Email',
        location: 'Location',
        social: 'Social Media'
      },
      loading: 'Loading...',
      form: {
        name: {
          label: 'Name',
          placeholder: 'Enter your name',
          required: 'Name is required',
          min: 'Name must be at least 2 characters',
          max: 'Name can be maximum 50 characters'
        },
        email: {
          label: 'Email',
          placeholder: 'Enter your email',
          required: 'Email is required',
          invalid: 'Please enter a valid email'
        },
        message: {
          label: 'Message',
          placeholder: 'Enter your message',
          required: 'Message is required',
          min: 'Message must be at least 10 characters',
          max: 'Message can be maximum 1000 characters'
        },
        submit: 'Send Message',
        submitting: 'Sending...',
        success: 'Your message has been sent successfully.',
        error: 'An error occurred while sending your message.'
      }
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, content[language].form.name.min)
      .max(50, content[language].form.name.max)
      .required(content[language].form.name.required),
    email: Yup.string()
      .email(content[language].form.email.invalid)
      .required(content[language].form.email.required),
    message: Yup.string()
      .min(10, content[language].form.message.min)
      .max(1000, content[language].form.message.max)
      .required(content[language].form.message.required)
  });

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success(content[language].form.success);
      resetForm();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(content[language].form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="container max-w-[1400px] mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>{content[language].loading}</span>
          </div>
        </div>
      </div>
    );
  }

  console.log('Current settings:', settings);

  return (
    <div className="container max-w-[1400px] mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{content[language].title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{content[language].description}</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sol Taraf - İletişim Bilgileri */}
          <div className="space-y-8">
            {/* E-posta */}
            {settings.email && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">{content[language].contact.email}</h2>
                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="hover:underline">{settings.email}</span>
                </a>
              </div>
            )}

            {/* Konum */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{content[language].contact.location}</h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Türkiye</span>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{content[language].contact.social}</h2>
              <div className="flex flex-col gap-4">
                {settings.github && (
                  <a
                    href={settings.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="hover:underline">GitHub</span>
                  </a>
                )}
                {settings.linkedin && (
                  <a
                    href={settings.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="hover:underline">LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Sağ Taraf - İletişim Formu */}
          <div className="bg-card border rounded-lg p-6">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isValid, dirty }) => (
                <Form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {content[language].form.name.label}
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder={content[language].form.name.placeholder}
                      className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {content[language].form.email.label}
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder={content[language].form.email.placeholder}
                      className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {content[language].form.message.label}
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder={content[language].form.message.placeholder}
                      rows={6}
                      className="w-full px-4 py-2 rounded-md border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid || !dirty}
                    className={`
                      w-full px-6 py-3 rounded-md font-medium relative overflow-hidden group
                      ${isSubmitting || !isValid || !dirty
                        ? 'bg-gray-400 cursor-not-allowed opacity-50'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300'
                      }
                    `}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          {content[language].form.submitting}
                        </>
                      ) : (
                        <>
                          <span>{content[language].form.submit}</span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </>
                      )}
                    </span>
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
} 