import { useState, useCallback, useRef } from 'react';
import { RotateCcw, X, ImageIcon, Upload } from 'lucide-react';

import { Card, CardContent, Button } from '@/components';
import { useToast } from '@/hooks';
import { cn } from '@/lib/utils';

interface IImageDropZone {
    placeholder?: string;
    maxSize?: number;
    onChange: (file: File | null) => void;
    className?: string;
    accept?: 'image/*';
}

export const ImageDropZone: React.FC<IImageDropZone> = ({
    placeholder = 'Перетащите изображение сюда',
    onChange,
    maxSize = 10 * 1024 * 1024, // 10 MB
    accept = 'image/*',
    className,
}) => {
    const [image, setImage] = useState<{ file: File; preview: string } | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { toast } = useToast();

    const MAX_SIZE = maxSize * 1024 * 1024;

    const openFileDialog = () => {
        fileInputRef.current?.click();
    };

    const validateFile = (file: File): string | null => {
        if (!file.type.startsWith('image/')) {
            return 'Файл должен быть изображением';
        }
        if (file.size > MAX_SIZE) {
            return `Размер файла не должен превышать ${Math.round(MAX_SIZE / 1024 / 1024)}MB`;
        }
        return null;
    };

    const processFile = useCallback(
        (file: File) => {
            if (!onChange) return;

            const validationError = validateFile(file);
            if (validationError) {
                return toast({
                    variant: 'destructive',
                    title: 'Uh oh! Something went wrong.',
                    description: `${validationError}`,
                });
            }

            if (image) {
                URL.revokeObjectURL(image.preview);
            }

            const preview = URL.createObjectURL(file);
            const newImage = { file, preview };

            setImage(newImage);
            onChange(file);
        },
        [image, onChange]
    );

    const handleDragOver: React.DragEventHandler<HTMLDivElement> | undefined = useCallback(() => {
        setIsDragOver(true);
    }, []);

    const handleDragLeave: React.DragEventHandler<HTMLDivElement> | undefined = useCallback(() => {
        setIsDragOver(false);
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            setIsDragOver(false);

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                processFile(files[0]);
            }
        },
        [processFile]
    );

    const handleFileSelect = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            if (files && files.length > 0) {
                processFile(files[0]);
            }
            e.target.value = '';
        },
        [processFile]
    );

    const removeImage = useCallback(() => {
        if (image) {
            URL.revokeObjectURL(image.preview);
            setImage(null);
            onChange?.(null);
        }
    }, [image, onChange]);

    return (
        <div className={cn("h-[50vh] relative'", className)}>
            <Card
                className={cn(
                    'border-2 border-dashed transition-all duration-200 cursor-pointer overflow-hidden bg-color-red h-full',
                    isDragOver
                        ? 'border-primary bg-primary/5 scale-[1.02]'
                        : image
                          ? 'border-muted-foreground/25 hover:border-muted-foreground/50'
                          : 'border-muted-foreground/25 hover:border-muted-foreground/50'
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={openFileDialog}>
                <CardContent className='relative h-full'>
                    {image ? (
                        <div className='relative group h-full w-full'>
                            <img
                                src={image.preview}
                                alt='Загруженное изображение'
                                className='w-full h-full object-contain'
                            />

                            <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center'>
                                <div className='flex gap-2'>
                                    <Button
                                        variant='secondary'
                                        size='sm'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openFileDialog();
                                        }}
                                        className='bg-white/90 hover:bg-white text-black'>
                                        <RotateCcw className='h-4 w-4 mr-2' />
                                        Заменить
                                    </Button>
                                    <Button
                                        variant='destructive'
                                        size='sm'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeImage();
                                        }}
                                        className='bg-red-500/90 hover:bg-red-500'>
                                        <X className='h-4 w-4 mr-2' />
                                        Удалить
                                    </Button>
                                </div>
                            </div>

                            <div className='absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity'>
                                <p className='font-medium'>{image.file.name}</p>
                                <p className='text-gray-300'>{(image.file.size / 1024 / 1024).toFixed(1)} MB</p>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col items-center justify-center py-12 px-6 text-center h-full'>
                            <div
                                className={cn(
                                    'rounded-full p-4 mb-4 transition-all duration-200',
                                    isDragOver ? 'bg-primary/20 scale-110' : 'bg-muted'
                                )}>
                                <Upload
                                    className={cn(
                                        'h-8 w-8 transition-colors',
                                        isDragOver ? 'text-primary' : 'text-muted-foreground'
                                    )}
                                />
                            </div>

                            <div className='space-y-2'>
                                <h3 className='text-lg font-semibold'>{placeholder}</h3>
                                <p className='text-sm text-muted-foreground'>или нажмите для выбора файла</p>
                                <p className='text-xs text-muted-foreground'>
                                    Поддерживаются: JPG, PNG, WEBP, AVIF (до {Math.round(MAX_SIZE / 1024 / 1024)}MB)
                                </p>
                            </div>

                            <Button
                                variant='outline'
                                className='mt-4 bg-transparent'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openFileDialog();
                                }}>
                                <ImageIcon className='h-4 w-4 mr-2' />
                                Выбрать изображение
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>

            <input ref={fileInputRef} type='file' accept={accept} onChange={handleFileSelect} className='hidden' />
        </div>
    );
};
