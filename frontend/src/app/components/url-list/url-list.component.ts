import { Component } from '@angular/core';
import { UrlService } from '../../services/url.service';
import { Url } from '../../models/url.model';
import { Clipboard } from '@angular/cdk/clipboard';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.scss'],
  standalone: true,
  imports: [
    NgIf, NgFor, NgClass,
    ClipboardModule
  ]
})
export class UrlListComponent {
  urls: Url[] = [];
  isLoading = true;
  error = '';
  copiedId: string | null = null;
  deleteMessage = '';
  isDeleteSuccess = false;

  constructor(
    private urlService: UrlService,
    private clipboard: Clipboard
  ) { }

  ngOnInit(): void {
    this.loadUrls();
  }

  loadUrls(): void {
    this.isLoading = true;
    this.urlService.getUrls().subscribe({
      next: (urls) => {
        this.urls = urls;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar os links. Por favor, recarregue a página.';
        this.isLoading = false;
      }
    });
  }

  copyToClipboard(text: string, id: string): void {
    this.clipboard.copy(text);
    this.copiedId = id;

    setTimeout(() => {
      this.copiedId = null;
    }, 3000);
  }

  deleteUrl(id: string): void {
    if (confirm('Tem certeza que deseja excluir este link?')) {
      this.urlService.deleteUrl(id).subscribe({
        next: () => {
          this.urls = this.urls.filter(url => url._id !== id);
          this.deleteMessage = 'Link excluído com sucesso!';
          this.isDeleteSuccess = true;

          setTimeout(() => {
            this.deleteMessage = '';
            this.isDeleteSuccess = false;
          }, 3000);
        },
        error: (err) => {
          this.error = 'Erro ao excluir o link. Por favor, tente novamente.';

          setTimeout(() => {
            this.error = '';
          }, 3000);
        }
      });
    }
  }

  // Formatar data para exibição
  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
}
