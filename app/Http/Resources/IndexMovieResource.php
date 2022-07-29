<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use function Symfony\Component\Routing\Loader\Configurator\collection;

class IndexMovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            /* TODO посмотреть правильно ли так делать! */
            'genres' => $this->genres,
            'description' => $this->description,
            'actors' => $this->actors,
            'release_year' => $this->release_year,
            'is_viewed' => $this->is_viewed,
            'rating' => $this->rating,
            'image' => $this->image,
            'created_at' => $this->created_at,
        ];
    }
}
