import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UrlService } from '../../services/url.service';
import { Url } from '../../models/url.model';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClipboardModule
  ]
})
export class UrlShortenerComponent {
  shortenerForm: FormGroup;
  newUrl: Url | null = null;
  isLoading = false;
  error = '';
  copied = false;
  isSuccess = false;

  constructor(
    private fb: FormBuilder,
    private urlService: UrlService,
    private clipboard: Clipboard
  ) {
    this.shortenerForm = this.fb.group({
      originalUrl: ['', [Validators.required, Validators.pattern('https?://.*')]]
    });
  }

  onSubmit(): void {
    if (this.shortenerForm.invalid) {
      this.error = 'Por favor, insira uma URL válida (deve começar com http:// ou https://)';
      return;
    }

    this.isLoading = true;
    this.error = '';
    this.newUrl = null;
    this.isSuccess = false;

    this.urlService.shortenUrl(this.shortenerForm.value.originalUrl)
      .subscribe({
        next: (url) => {
          this.newUrl = url;
          this.isSuccess = true;
          this.isLoading = false;
          this.shortenerForm.reset();
        },
        error: (err) => {
          this.error = err.error?.error || 'Erro ao encurtar a URL. Por favor, tente novamente.';
          this.isLoading = false;
        }
      });
  }

  copyToClipboard(text: string): void {
    this.clipboard.copy(text);
    this.copied = true;

    setTimeout(() => {
      this.copied = false;
    }, 3000);
  }
}
