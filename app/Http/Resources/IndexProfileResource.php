<?php

namespace App\Http\Resources;

use App\Models\Movie;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Database\Eloquent\Builder;

class IndexProfileResource extends JsonResource
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
            'email' => $this->email,
            'name' => $this->name,
            'created_at' => $this->created_at,
            'movies_count' => $this->movies->count(),
            'is_viewed_true' => $this->movies()->where('is_viewed', 1)->count(),
            'is_viewed_false' => $this->movies()->where('is_viewed', 0)->count(),
//            'top_genres' => $this->movies,
        ];
    }
}
